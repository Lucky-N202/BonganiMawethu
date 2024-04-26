import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";


interface KoalaWelcomeEmailProps {
  name: string;
  email: string;
  message: string;

}



export const WelcomeEmail = ({
  name, email, message
}: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Your potential client awaits.
    </Preview>
    
    <Body style={main}>
      <Container style={container}>
      
        <Heading as="h2" style={h2}>BonganiMawethu</Heading>
       
        <Text style={paragraph}>Hi {name},</Text>
        <Text style={paragraph}>
         {message}.
          <br/>
          From {email}
        </Text>
        
        <Text style={paragraph}>
          Best,
          <br />
          The BonganiMawethu team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          @BonganiMawethu
        </Text>
      </Container>
    </Body>
    
  </Html>
);



export default WelcomeEmail;


const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",

};



const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};



const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

const h2 = {
  color: "#737373",
  textAlign: "center" as const,
  
}
