# DOMfromPHP
generating DOM from server (through AJAX)
Script is dowloading JSON data from remote server and showing HTML to the user. 

 Aby otrzymać obiekt akcji, należy wysłać ID akcji do serwera metodą POST. Identyfikator akcji
powinien być iterowany od 1 do 9000, gdzie 9000 to ostatnia akcja do obsłużenia.
Rodzaje akcji do obsłużenia:
<br>
<br>
<b>display:</b> celem akcji jest wyświetlenie użytkownikowi w centralnym miejscu okna przeglądarki (w pionie i poziomie) zawartości HTML przesłanej w obiekcie JSON (zawartość ‘data’)
<br>
<br>
<b>trigger:</b> celem akcji jest wykonanie operacji na pobranej wcześniej zawartości w akcji
„display” mającej na celu uruchomienie styli CSS zmieniających wygląd zawartości widocznej
dla użytkownika – w tym celu należy przygotować 3 przykładowe zestawy styli CSS, zmieniające zupełnie wygląd zawartości (musi zmienić się: typ czcionki, wielkość czcionki,
kolor czcionki oraz tła poszczególnych elementów zawartości, wszystkie wartości muszą być
unikalne dla każdego elementu z osobna w każdym z 3 wariantów styli CSS),
<br>
<br>
<b>null:</b> akcja nie realizująca żadnej funkcjonalności, otrzymanie jej z serwera nie wykonuje
żadnej operacji na danych i/lub zawartości widocznej dla użytkownika.

