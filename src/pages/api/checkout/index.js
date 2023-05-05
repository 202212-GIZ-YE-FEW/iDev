import getStripe from "@/stripe/getStripe";

export async function checkout({
    lineItems,
    customerEmail,
    successUrl,
    cancelUrl,
}) {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
        mode: "payment",
        lineItems,
        customerEmail,
        successUrl,
        cancelUrl,
    });
    if (error) {
        console.error(error);
    }
}
