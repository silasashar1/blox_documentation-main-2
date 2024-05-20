// 

import React, { useState } from "react";
import Faq from "react-faq-component";

const lightTheme = {
    titleTextColor: 'blue',
    rowTitleColor: 'blue',
    rowContentTextSize: '16px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '50px',
};

const darkTheme = {
    titleTextColor: 'lightblue',
    rowTitleColor: 'lightblue',
    rowContentTextSize: '16px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '50px',
    bgColor: 'black',
    rowContentColor: 'white',
};

const data = {
    title: "FAQ - Vue Platform",
    rows: [
        {
            title: "How can I sign up for Vue?",
            content: `Please reach out to one of our sales representatives via vue-support@madstreetden.com. We’ll get back to you with details.`,
        },
        {
            title: "Is it possible to have a free trial account for Vue?",
            content: `Sorry, currently, we are not offering a free trial account for Vue. However, you can reach us at vue-support@madstreetden.com, and we’ll get back to you with a POC.`,
        },
        {
            title: "How do I set my password for Vue?",
            content: `As a part of account setup, we will provide you with login credentials. If you need additional logins created, please reach us at vue-support@madstreetden.com.`,
        },
        {
            title: "Lost password and can’t sign in?",
            content: `You can reset the password for your account by clicking on the ‘Forgot Password’ CTA & following the instructions.`,
        },
        {
            title: "How can I sign up for a trial?",
            content: `Sorry, currently, we are not offering a free trial account for Vue. However, you can reach us at vue-support@madstreetden.com, and we’ll get back to you with a POC.`,
        },
        {
            title: "How can I change my Vue account password?",
            content: `You can reset the password for your account by clicking on the ‘Forgot Password’ CTA & following the instructions or from the ‘User Profile’ screen.`,
        },
        {
            title: "How to add team members to the Vue account?",
            content: `Currently, it’s not possible for you to invite more members to Vue. Please reach out to us at vue-support@madstreetden.com, and we’ll be happy to create logins for you.`,
        },
        {
            title: "What are the user permissions available for a Vue account?",
            content: `You can decide between any one of the following options:`,
        },
        // Add more FAQs here
    ],
};

const config = {
    // Add any custom configuration here
};

export default function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const styles = theme === 'light' ? lightTheme : darkTheme;

    return (
        <div style={{ backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white', minHeight: '100vh' }}>
            <button onClick={toggleTheme} style={{ margin: '20px', padding: '10px', cursor: 'pointer' }}>
                Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
            <Faq data={data} styles={styles} config={config} />
        </div>
    );
}
