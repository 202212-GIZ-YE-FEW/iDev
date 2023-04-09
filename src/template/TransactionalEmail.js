export const TransactionalTemplate = (
    thankFor,
    thankSubtitle,
    image,
    mainContent
) => `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
        <meta name="robots" content="noindex, nofollow">
        <title>Welcome Email</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet">
        <style>
            body {
                margin: 0;
                padding: 0;
                mso-line-height-rule: exactly;
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                font-family: "Poppins", "Graphik", "sans-serif";
            }

            @media only screen and (max-width: 640px) {
                body {
                    margin: 0px !important;
                    padding: 0px !important;
                    -webkit-text-size-adjust: none !important;
                }
            }
        </style>
    </head>
    <body style="
            padding: 0;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            background-color: #f1f1f1;
            -webkit-text-size-adjust: none;
        ">
        <div style="max-width: 640px; margin-left: auto;margin-right:auto">
            <!-- <div style="background-color: #EAF8F9; padding-inline: 8rem; padding-block:1rem;">
                    <a href="https://therapistidev.netlify.app/ar" blank="_blank" style="text-decoration: none;display: flex; justify-content: center; align-items: center;">
                        <img src="./assets/logo.svg" width="40">
                        <span style="color:#1A1A1A;margin-inline:12px;font-family: 'Poppins', Arial, Helvetica, sans-serif;font-size:34px;-webkit-font-smoothing:antialiased;">Healing</span>
                    </a>
                </div> -->
            <div style="
                        padding-top:10px;
                        text-align: center;
                        background-color: #e5e5e5;
                        color: #1a1a1a;
                    ">
                <p style="
                            margin-bottom: 0;
                            font-weight: 600;
                            font-size: 34px;
                            -webkit-font-smoothing: antialiased;
                            line-height: 1.2;
                        ">
                    Thank you for
                    <br>
                    ${thankFor}
                </p>
                <p style="
                            font-size: 16px;
                            -webkit-font-smoothing: antialiased;
                            line-height: 1;
                        ">
                    ${thankSubtitle}
                </p>
                <img src="${image}" width="250" height="210" style="min-width: 50%">
            </div>
            ${mainContent}
            </div>
            <div style="
                    background-color: #fbfbfb;
                    color: #424a4f;
                    padding-right:2rem;
                    padding-left:2rem;
                    padding-top:3rem;
                    padding-bottom:3rem;
                ">
                <p>
                    We always strive to satisfy our customers and visitors to our site.
                    Your communication with us contributes to the development of our services that we provide to you.
                    <br>
                    If you have any questions or need our help, you can reply to
                    this email.
                    <br>
                    <br>
                    Thanks,
                    <br>
                    The iDev Therapist team
                </p>
            </div>
        </div>
        <!--Main Parent Table Ends Here -->
    </body>
</html>`;
