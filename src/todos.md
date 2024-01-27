1. [X] Create a todo creation modal with a fixed bottom corner plus sign
    - [X] Validate the form
    - [X] Format the date to be readable
        - How to do this:
          ```javascript
          import { parse, format } from 'date-fns';
          const date = parse('1-1-2024', 'd-M-yyyy', new Date());
          const formattedDate = format(date, 'M/d/yy');
          console.log(formattedDate); // Outputs: 1/1/24
          ```
    - [X] Dynamically retrieve projects and populate them in the menu
    - [X] Call the editTodos function when the plus sign is clicked
        - [X] Prevent the default event
    - [X] Blur the background when the plus sign is clicked and display the modal
    - [X] Add event listeners for submit and plus sign
    - [X] Rerender the todos once the submit button is pressed and the todo is added

2. [ ] Add styling for priority

3. [ ] Make the edit button functional

4. [ ] Create a dynamic project header

5. [ ] Consider adding a details button

6. [ ] Implement localStorage for data persistence

7. [ ] Implment addProject button