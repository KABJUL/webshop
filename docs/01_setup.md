# Project Setup – Webshop QA Automation Project

## Overview

This document describes how the project was initialized and the key configuration decisions made during setup.
The project is a **Next.js-based webshop application** intended for QA automation practice using Playwright.

## Project Initialization

The project was created using the official Next.js scaffolding tool:

npx create-next-app@latest webshop

During setup, the following options were selected:

TypeScript: No (kept project simple for faster iteration)
ESLint: Yes (code quality enforcement)
Tailwind CSS: Yes (fast UI development)
App Router: Yes (modern Next.js structure)
src directory: Yes (organized project structure)
Import alias: @/\*
React Compiler: No (avoiding experimental features)
AGENTS.md: No

## Rationale

The goal of these choices was to:

Keep the project lightweight and easy to iterate on
Focus on QA automation and testing practice rather than complex frontend architecture
Use modern but stable tooling (Next.js App Router, Tailwind CSS)
Ensure maintainability for future test automation integration

## Resulting Structure

Next.js application successfully created
Git repository initialized
Local development server available via:
http://localhost:3000

## Status

Project setup completed successfully.
Next step: implement basic webshop UI and introduce test automation framework (Playwright).

---
