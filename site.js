﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//atendimentos
document.querySelector('.btn-custom').addEventListener('click', function(event) {
  event.preventDefault();
  alert('Redirecionando para WhatsApp...');
  window.location.href = 'https://web.whatsapp.com';
});

