\ https://www.codewars.com/kata/56cd44e1aa4ac7879200010b

create is-upper true ,
: lowercase-char? ( c -- t/f ) [char] a [char] z 1+ within ;
: uppercase? ( c-addr len -- t/f )
  is-upper on
  over + swap
  do
    i c@
    lowercase-char? if
      is-upper off
    then
  loop
  is-upper @
;

