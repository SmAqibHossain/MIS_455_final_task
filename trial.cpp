#include <iostream>
#include <unistd.h>
#include <sys/wait.h>
#include <vector>
#include <string>
#include <sstream>
#include <cmath>

using namespace std;

int evaluate_term(int coefficient, double x, int power) {
  return coefficient * pow(x, power);
}

int main(int argc, char* argv[]) {
  // Check for valid arguments
  if (argc < 3) {
    cerr << "Usage: " << argv[0] << " <evaluate at> [space separated coefficients, ascending]" << endl;
    return 1;
  }

  // Parse arguments
  double x;
  stringstream ss(argv[1]);
  if (!(ss >> x)) {
    cerr << "Invalid value for x." << endl;
    return 1;
  }

  vector<int> coefficients;
  for (int i = 2; i < argc; ++i) {
    int coefficient;
    if (!(stringstream(argv[i]) >> coefficient)) {
      cerr << "Invalid coefficient format." << endl;
      return 1;
    }
    coefficients.push_back(coefficient);
  }

  int degree = coefficients.size() - 1;

  // Create child processes for each term (excluding constant term)
  int pipes[degree][2];
  for (int i = 0; i < degree; ++i) {
    if (pipe(pipes[i]) == -1) {
      perror("pipe");
      exit(1);
    }

    int pid = fork();
    if (pid == -1) {
      perror("fork");
      exit(1);
    } else if (pid == 0) { // Child process
      close(pipes[i][0]); // Close read end in child
      int result = evaluate_term(coefficients[i], x, degree - i);
      write(pipes[i][1], &result, sizeof(result)); // Write result to pipe
      close(pipes[i][1]); // Close write end
      exit(0);
    } else { // Parent process
      close(pipes[i][1]); // Close write end in parent
    }
  }

  // Wait for child processes and collect results
  int final_result = coefficients[degree]; // Add constant term first
  for (int i = 0; i < degree; ++i) {
    int status;
    wait(&status); // Wait for child process to finish

    int term_result;
    if (read(pipes[i][0], &term_result, sizeof(term_result)) == -1) {
      perror("read");
      exit(1);
    }
    close(pipes[i][0]); // Close read end after reading

    final_result += term_result;
  }

  cout << "The result of the polynomial evaluation is: " << final_result << endl;

  return 0;
}
