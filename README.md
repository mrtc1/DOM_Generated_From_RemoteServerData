# DOMfromPHP
generating DOM from server (through AJAX)
Script is dowloading JSON data from remote server and showing HTML to the user. 

In order to receive action object, you need to sent action ID to the server using POST method. Id should be iterated from 1 to 9000, where 9000 is the last action to serve. 
 <br>
Action types:
<br>
<br>
<b>display:</b> The aim is to display to the user in the middle of the viewportv HTML content sent in JSON object. 
<br>
<br>
<b>trigger:</b> The aim is to operate on the previously downoladed content (in the 'display' action). Operation should run adequate CSS changing the way the content looks – in order to do that I've prepared 3 types of unique CSS styles.
<br>
<br>
<b>null:</b> action with no functionality. Recieving it from the server do not change the content nor the style of it.

