# Application Builder Frontend

Brief description of your project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Git Hooks](#git-hooks)
  - [Branch Naming Convention](#branch-naming-convention)
  - [Commit Message Convention](#commit-message-convention)
  - [Code Style and Linting](#code-style-and-linting)
- [Testing](#testing)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Installation

bash
npm install


## Usage

Instructions on how to use the project once it's set up.

## Development

### Prerequisites

- Node.js (version x.x.x)
- npm (version x.x.x)

### Setup

1. Clone the repository
   
   git clone https://github.com/AnandaGeotech/application-builder.git
   
2. Install dependencies
   
   npm install
   
3. Set up git hooks
   
   npx husky install
   

### Git Hooks

This project uses Git hooks to enforce code quality and consistency:

- *pre-commit*: Runs ESLint and Prettier on staged files.
- *commit-msg*: Validates commit messages using commitlint.
- *pre-push*: Checks branch naming convention.

## Development

# Branch Naming Convention

Our project follows a specific branch naming convention to maintain consistency and clarity in our version control system. This convention is enforced by the check-branch-name.js script, which runs as a pre-push hook.

## Branch Name Format

Branch names must adhere to the following format:


^(feature|bugfix|improvement|library|prerelease|release|hotfix)\/[a-z0-9._-]+$


This means:

1. The branch name must start with one of the following prefixes:

- feature/
- bugfix/
- improvement/
- library/
- prerelease/
- release/
- hotfix/

2. After the prefix, the branch name can contain:

- Lowercase letters (a-z)
- Numbers (0-9)
- Periods (.)
- Underscores (\_)
- Hyphens (-)

3. The branch name should be descriptive but concise.

## Examples of Valid Branch Names

Here are some examples of valid branch names:

1. For new features:

   
   feature/user-authentication
   feature/shopping-cart
   feature/email-notifications
   

2. For bug fixes:

   
   bugfix/login-error
   bugfix/payment-gateway-timeout
   bugfix/mobile-layout-overflow
   

3. For improvements:

   
   improvement/database-performance
   improvement/ui-redesign
   improvement/code-refactoring
   

4. For library updates:

   
   library/update-react-18.2
   library/upgrade-node-modules
   

5. For pre-releases:

   
   prerelease/v1.2.0-alpha
   prerelease/beta-testing
   

6. For releases:

   
   release/v1.2.0
   release/2023-q2-update
   

7. For hotfixes:
   
   hotfix/security-vulnerability
   hotfix/critical-bug-fix
   

## Examples of Invalid Branch Names

The following branch names would be rejected by the check-branch-name.js script:


feat/new-feature          // Invalid prefix
bug/login-error           // Invalid prefix
feature-user-auth         // Missing slash after prefix
FEATURE/UPPERCASE         // Uppercase letters not allowed
feature/spaces not allowed // Spaces not allowed
improvement/special&chars  // Special characters not allowed


## Creating a New Branch

To create a new branch following this convention, use the following git command:

bash
git checkout -b feature/your-feature-name


Replace feature with the appropriate prefix and your-feature-name with a brief description of the branch's purpose.

## Importance of Branch Naming Convention

Following this branch naming convention offers several benefits:

1. *Clarity*: It's immediately clear what the purpose of each branch is.
2. *Organization*: Branches are naturally categorized by their prefix.
3. *Automation*: It enables automated processes and hooks (like our pre-push check).
4. *Consistency*: It ensures all team members follow the same naming structure.

Remember, if you try to push a branch with an invalid name, the push will be rejected, and you'll need to rename your branch to comply with the convention.

# Commit Message Examples

Based on the rules defined in commitlint.config.js, here are some example commit messages that would pass the commitlint checks:

## Feature addition


feat: Add user authentication functionality


## Bug fix


fix: Resolve login error for special characters in passwords


## Documentation update


docs: Update README with new installation instructions


## Code style change


style: Format code according to new ESLint rules


## Code refactoring


refactor: Simplify data processing algorithm


## Adding or modifying tests


test: Add unit tests for user registration process


## Chores

For updating build tasks, package manager configs, etc.:


chore: Update dependencies to latest versions


## Performance improvement


perf: Optimize database queries for faster load times


## CI related changes


ci: Configure Travis CI for automatic deployments


## Build system changes

For changes that affect the build system or external dependencies:


build: Switch from Webpack to Rollup for module bundling


## Reverting a previous commit


revert: Revert "feat: Add user authentication functionality"


## Important Rules to Remember

1. The type (e.g., feat, fix) should always be lowercase.
2. There should always be a colon and a space after the type.
3. The subject can be in sentence case, start case, pascal case, upper case, or lower case.
4. The subject should not end with a period.
5. The entire header (type + subject) should not exceed 72 characters.

These examples demonstrate how to structure your commit messages to comply with th

### Code Style and Linting

#### Variable Naming

We follow camelCase for variable and function names, PascalCase for class names, and UPPER_CASE for constants.

Examples:

javascript
// Good
const userName = "John Doe";
function calculateTotal() {
  /* ... */
}
class UserProfile {
  /* ... */
}
const MAX_RETRY_COUNT = 3;

// Bad
const user_name = "John Doe";
function CalculateTotal() {
  /* ... */
}
class userProfile {
  /* ... */
}
const maxRetryCount = 3;


#### ESLint Best Practices

Our ESLint configuration enforces several best practices. Here are some key rules:

1. No unused variables:

   javascript
   // Bad
   const unused = "This variable is never used";

   // Good
   const used = "This variable is used";
   console.log(used);
   

2. Prefer const over let for variables that are never reassigned:

   javascript
   // Bad
   let count = 1;
   if (condition) {
     count = 2;
   }

   // Good
   const count = 1;
   const newCount = condition ? 2 : count;
   

3. Use template literals instead of string concatenation:

   javascript
   // Bad
   const greeting = "Hello, " + name + "!";

   // Good
   const greeting = `Hello, ${name}!`;
   

4. Avoid console.log statements in production code:

   javascript
   // Bad
   console.log("Debug information");

   // Good
   import logger from "./utils/logger";
   logger.debug("Debug information");
   

5. Use arrow functions for callbacks:

   javascript
   // Bad
   [1, 2, 3].map(function (x) {
     return x * 2;
   });

   // Good
   [1, 2, 3].map((x) => x * 2);
   

To run the linter:

bash
npm run lint


To automatically fix linting and formatting issues:

bash
npm run lint:fix


Remember to check the .eslintrc.json file for a complete list of enabled rules and their configurations.

## Testing

Instructions on how to run the automated tests for this system.

## Deployment

Add additional notes about how to deploy this on a live system.

## Built With

- [React](https://reactjs.org/) - The web framework used (if applicable)
- [Node.js](https://nodejs.org/) - Runtime environment
- [ESLint](https://eslint.org/) - Linting utility
- [Prettier](https://prettier.io/) - Code formatter
- [Commitlint](https://commitlint.js.org/) - Commit message linter
- [Husky](https://typicode.github.io/husky/#/) - Git hooks made easy
- [lint-staged](https://github.com/okonet/lint-staged) - Run linters on git staged files

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
