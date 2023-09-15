PROJECT FEATURES: 

        • Users are able to see what courses are available and can get a basic idea about course from description.
        • Whenever user select a course, the button will show them that this is already selected. so, user will never waste their time to mistakely select it again.
        • Whenever user select multiple courses, the total credit hour and total price will show on cart.

How i managed the state on this project?

        • I used the useState hook for managing my component state in functional components. 
        • For courses section,  I fetched my json data with useEffect hook and access them with useState hook.
        • For the cart section, i used a function on the app.jsx file. and passed the function to the card component as props and added as 'onClick' event and passed the parameter for course information. Then i added different hooks for different calculation of cart section and passed them to the cart component as props and added dynamically.