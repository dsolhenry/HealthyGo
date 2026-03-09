const stripe = Stripe("YOUR_STRIPE_PUBLIC_KEY");

function buyProduct(){

fetch("/create-checkout-session", {
method: "POST"
})
.then(res => res.json())
.then(data => {
stripe.redirectToCheckout({ sessionId: data.id });
});

}
