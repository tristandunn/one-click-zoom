# one-click-zoom

Automatically launch a Zoom meeting in one click, and close the Chrome tab.

## Installation

1. Restore the checkbox in Chrome to allow launching Zoom without a prompt.

   **macOS**

   Restore the checkbox by running the following command in the terminal.

   ```sh
   defaults write com.google.Chrome ExternalProtocolDialogShowAlwaysOpenCheckbox -bool true
   ```

   **Windows**

   See [what registry entry to add][].

2. Restart the Chrome application to ensure the checkbox appears.

3. Click a Zoom meeting link, [any will do][], and enable the checkbox.

   <img src="https://i.imgur.com/bDyDyL9.png" width="465">

4. Clone the Chrome extension for automatically closing the tab.

   ```sh
   git clone git@github.com:tristandunn/one-click-zoom.git
   ```

5. Inside of Chrome go to "Extensions" under the "Window" menu.

6. Enable "Developer mode" via the toggle in the top right.

7. Click the "Load unpacked" button on the left and select the repository folder.

## License

one-click-zoom uses the MIT license. See LICENSE for more details.

[any will do]: https://zoom.us/j/123456789
[what registry entry to add]: https://superuser.com/a/1518982
