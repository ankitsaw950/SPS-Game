export const Verification_Email_Template = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }

        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #fff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .email-header {
            background: #4CAF50;
            padding: 20px;
            text-align: center;
            color: white;
            font-size: 24px;
        }

        .email-body {
            padding: 20px;
            line-height: 1.6;
        }

        .email-body p {
            margin: 10px 0;
        }

        .email-button {
            display: block;
            text-align: center;
            margin: 20px 0;
        }

        .email-button a {
            text-decoration: none;
            background: #4CAF50;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 16px;
        }

        .email-footer {
            background: #f9f9f9;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #888;
        }

        .email-footer a {
            color: #4CAF50;
            text-decoration: none;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <div class="email-header">
            Verify Your Email Address
        </div>
        <div class="email-body">
            <p>Hi {user_name},</p>
            <p>Thank you for signing up! Please verify your email address to complete the registration process.</p>
            <p>Click the button below to verify your email:</p>
            <div class="email-button">
                <a href="{Verification_Link}" target="_blank">Verify Email</a>
            </div>
            <p>If you did not sign up for this account, please ignore this email or contact support.</p>
            <p>Thank you,<br>The SPS Game Team</p>
        </div>
        <div class="email-footer">
            <p>If the button above does not work, copy and paste the following URL into your browser:</p>
            <p><a href="{Verification_Link}" target="_blank">[Verification Link]</a></p>
            <p>&copy; 2025 SPS Gamw. All rights reserved.</p>
        </div>
    </div>
</body>

</html>
`;

export const Welcome_Email_Template = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }

        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #fff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .email-header {
            background: #2196F3;
            padding: 20px;
            text-align: center;
            color: white;
            font-size: 24px;
        }

        .email-body {
            padding: 20px;
            line-height: 1.6;
        }

        .email-body p {
            margin: 10px 0;
        }

        .email-button {
            display: block;
            text-align: center;
            margin: 20px 0;
        }

        .email-button a {
            text-decoration: none;
            background: #2196F3;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 16px;
        }

        .email-footer {
            background: #f9f9f9;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #888;
        }

        .email-footer a {
            color: #2196F3;
            text-decoration: none;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <div class="email-header">
            Welcome to SPS Game!
        </div>
        <div class="email-body">
            <p>Hi {user_name},</p>
            <p>We're thrilled to have you on board! At SPS Game, we're committed to providing you with the best experience possible.</p>
            
            <p>Click the button below to explore your account and get started:</p>
            <div class="email-button">
                <a href="[Account Link]" target="_blank">Go to My Account</a>
            </div>
            <p>If you have any questions, feel free to reply to this email or reach out to our support team.</p>
            <p>Welcome aboard!<br>The SPS Game Team</p>
        </div>
        <div class="email-footer">
            <p>If the button above does not work, copy and paste the following URL into your browser:</p>
            <p><a href="[Account Link]" target="_blank">[Account Link]</a></p>
            <p>&copy; 2025 SPS Game. All rights reserved.</p>
        </div>
    </div>
</body>

</html>

`;
