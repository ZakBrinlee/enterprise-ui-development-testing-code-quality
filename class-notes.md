# Frontend Masters Course
# Enterprise UI Development: Testing and Code quality
- Started: Sunday December 24th, 2023
- Completed: Sunday December 24th, 2023
Course on how to build the infrastructure needed to manage a large code base supported by a team of contributors.


## What will be covered
- 

## Questions
- 

## Links
- [Vitest](https://vitest.dev/) - Next Generation Testing Framework
- [Vitest UI](https://vitest.dev/guide/ui.html) - Awesome UI tool to gain a real time visual of tests.
- []() -

## Top Level Notes
- Components of a Well-Architected UI Application
-- Testing: unit, component, integration, end-to-end, smoke tests, health checks
-- Static analysis: TypeScript, linting, formatting, etc
-- Build processes: Automatically run checks for the items above
-- Separation of concerns: Keeping your business logic separate from the view layer
-- Deployment infrastructure: Do you even CDN
-- Design processes: Are we thinking things out or are we throwing spaghetti at the wall?

## Introduction
- This course will show you how to put together an infrastructure that will give you confidence when making changes big or small
- Ability to confidently make changes and know you didn't break something
- Components of a Well-Architected UI Application
-- Testing: unit, component, integration, end-to-end, smoke tests, health checks
-- Static analysis: TypeScript, linting, formatting, etc
-- Build processes: Automatically run checks for the items above
-- Separation of concerns: Keeping your business logic separate from the view layer
-- Deployment infrastructure: Do you even CDN
-- Design processes: Are we thinking things out or are we throwing spaghetti at the wall?
- Three ingrediants for sustainable architecture
-- Patters: Architecture, state management, abstractions
-- Processes: Code reviews, blueprints, design documents.
-- Systems: Testing infrastructure, static analysis, build systems.

## The Basics of Unit Testing
### Types of Tests
- Level-set on a set of terms of what is testing
- Unit tests: smallest possible test you can, test functions
- e2e tests: Test the entire application in real world
- Integration test: one or more units of the application are tested together and ensure they work as expected
- Component tests: Render single component and ensure it works
### Setup Unit Testing with Vitest
- Unit testing -> first layer of defense
### Vitest UI
- Awesome visualer for all tests and current status
-- https://vitest.dev/guide/ui.html
- Most common assertion methods
-- * toBe: https://vitest.dev/api/expect.html#tobe
-- * toBeCloseTo: https://vitest.dev/api/expect.html#tobecloseto
-- * toBeInstanceOf: https://vitest.dev/api/expect.html#tobeinstanceof
-- * toBeUndefined: https://vitest.dev/api/expect.html#tobeundefined
-- * toContain: https://vitest.dev/api/expect.html#tocontain
-- * toThrow: https://vitest.dev/api/expect.html#tothrow
-- * toThrowError: https://vitest.dev/api/expect.html#tothrowerror
## Building a CI Pipeline with Github Actions
## Component Testing
## Accessibility Testing & Code Coverage
## Mocking and Spying
## Integration Testing with Playwright
## Enforcing Standards
## Wrapping Up

