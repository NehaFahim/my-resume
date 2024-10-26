#! /usr/bin/env node
const toggleBtn = document.querySelector('.toggle-btn');
const toggleContainer = document.querySelector('.toggle-container');

toggleBtn.addEventListener('click', () => {
    toggleContainer.classList.toggle('hidden');
});