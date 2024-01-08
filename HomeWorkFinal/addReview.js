// function addReview() {
//   // const reviewForm = document.getElementById('reviewForm');
//   const btn = document.getElementById('addButton');
//
//   btn.addEventListener('click', function(event) {
//     // event.preventDefault();
//     const productName = document.getElementById('productName').value;
//     const reviewText = document.getElementById('reviewText').value;
//     if (productName.trim() === '' || reviewText.trim() === '') {
//       alert('Пожалуйста, заполните оба поля');
//     } else {
//       let products = JSON.parse(localStorage.getItem('products')) || {};
//       if (products[productName]) {
//         products[productName].push(reviewText);
//       } else {
//         products[productName] = [reviewText];
//       }
//       localStorage.setItem('products', JSON.stringify(products));
//       // reviewForm.reset();
//     }
//   });
// }

// addReview();

function addReview() {
  // const reviewForm = document.getElementById('reviewForm');

    const productName = document.getElementById('productName').value;
    const reviewText = document.getElementById('reviewText').value;
    if (productName.trim() === '' || reviewText.trim() === '') {
      alert('Пожалуйста, заполните оба поля');
    } else {
      let products = JSON.parse(localStorage.getItem('products')) || {};
      if (products[productName]) {
        products[productName].push({id: Date.now(), text: reviewText});
      } else {
        products[productName] = [{id: Date.now(), text: reviewText}];
      }
      localStorage.setItem('products', JSON.stringify(products));
      document.getElementById('productName').value = '';
      document.getElementById('reviewText').value = '';
    }
}
