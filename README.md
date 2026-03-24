# File Upload Security Challenge (Safe Simulation)

This GitHub Pages-based challenge teaches how insecure uploaders
*appear* to work. No real uploads occur, and no code is executed.

## Student Tasks

1. Analyse the blacklist-based extension filtering.
2. Identify common bypass techniques that *would* work on a real server:
   - double extensions (e.g., shell.php.jpg)
   - filename tricks
   - MIME spoofing
   - polyglot files
3. Explain why client-side validation cannot be trusted.
4. Propose a secure upload architecture:
   - whitelist extensions
   - validate MIME using server-side libraries
   - verify file signatures
   - store outside webroot
   - randomise file names
   - restrict execution permissions

## Notes

- GitHub Pages cannot host real upload backends.
- This is a simulation designed for instruction only.
