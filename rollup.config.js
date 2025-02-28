import html from '@rollup/plugin-html';

export default {
  input: 'src/index.html', // Ensure this path is correct
  plugins: [
    html(),
    // ...existing plugins...
  ],
  // ...existing code...
};
