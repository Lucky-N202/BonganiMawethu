import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message
}) => (
  <div>
    <h1>Contact form submission</h1>
    <h1>Welcome, {name}!</h1>
    <p>at {email}</p>
    <h2>Message: </h2>
    <p>{message}</p>
  </div>
);
