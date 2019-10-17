# Front-End

## Screen Breakdown

1. Main screen
    1. Greeting message (top left)
       (Add a message to users with no data suggesting creating new list.)
    2. User photo & link to profile Component (top right)
    3. Scheduled Tasks Component (center top)
        1. [Task Item Component]
        2. Reminder DateTime (bottom)
    4. My Lists Component (center bottom)
        1. [List Item Component]
    5. Search icon (lower left)
    6. Add list button (lower right)

## Components

0. Item Component
    0. ID
    1. Icon (left)
    2. Title / Description

1. List Item Component
    0. ID
    1. [Item Component]

2. Task Item Component
    0. ID
    1. [Item Component]
    2. Done Status (boolean)
    3. Reminder Schedule (DateTime)

3. General Dialog
    1. Title - only on Schedule dialog?
    2. Close button? (top right)
       should also support closing by clicking outside of the control
    3. Input - one of:
        1. Description
        2. DateTime
    4. Schedule icon (lower left) - only for Tasks
    5. OK button

4. Create List
    1. [General Dialog]

5. Create Task
    1. [General Dialog]

6. Adjust Task Reminder
    1. [General Dialog]
    Scheduler options

7. Search
    1. [General Dialog]
