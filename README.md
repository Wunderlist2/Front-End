# Front-End

## Screen Breakdown

1. Welcome Page {Paul/Patrick}
2. Register / Signin {Patrick/Benjamin/Paul}
3. Main screen {Paul/Benjamin}
    1. Greeting message (top left) {Paul/Benjamin}
       (Add a message to users with no data suggesting creating new list.)
    2. User photo & link to profile Component (top right) {Adric/Paul/Benjamin}
    3. Scheduled Tasks Component (center top) {Paul/Patrick/Benjamin}
        1. [Task Item Component]
        2. Reminder DateTime (bottom)
    4. My Lists Component (center bottom) {Paul/Benjamin}
        1. [List Item Component]
    5. Search icon (lower left) {Paul/Patrick}
    6. Add list button (lower right) {Paul/Benjamin}

## Components

1. Item Component {Not Implemented}
    1. ID
    2. Icon (left)
    3. Title / Description

1. List Item Component {Patrick/Benjamin}
    1. ID
    2. [Item Component]

2. Task Item Component {Patrick/Benjamin}
    1. ID
    2. [Item Component]
    3. Done Status (boolean)
    4. Reminder Schedule (DateTime)

3. General Dialog {Not Implemented}
    1. Title - only on Schedule dialog?
    2. Close button? (top right)
       should also support closing by clicking outside of the control
    3. Input - one of:
        1. Description
        2. DateTime
    4. Schedule icon (lower left) - only for Tasks
    5. OK button

4. Create List {Patrick/Benjamin}
    1. [General Dialog]

5. Create Task {Patrick/Benjamin}
    1. [General Dialog]

6. Adjust Task Reminder {Not Implemented}
    1. [General Dialog]
    Scheduler options

7. Search {Patrick/Paul}
    1. [General Dialog]
