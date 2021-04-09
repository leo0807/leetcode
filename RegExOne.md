Problem 1: Matching a decimal numbers
-?\d+[\.\,]?\de?(\d?)+\.?\d+
Problem 2: Matching phone numbers
\d{0,3}? ?\(?(\d{3})\)?[\d -]+
Problem 3: Matching emails
(\w+\.?\w\*)\+?(\w+)?\@hogwarts(\.eu)?\.com
Problem 4: Matching HTML
(\<(\w+)\s?(\w+\=\'[\w*\://.]+\')_\>._\</\w+>)\*
Problem 5: Matching specific filenames
(.+)\.(jpg|png|gif)\$
Problem 6: Trimming whitespace from start and end of line
^\s*(.*)\s\*\$
Problem 7: Extracting information from a log file
(\w+)(?=\(((\w+.java)\:(\d+))\)\$)
Problem 8: Parsing and extracting data from a URL
(\w+)://([\w\.-]+)(:(\d+))?[\w/\.#%]



# http://play.inginf.units.it/
level 6
href=("(._?)")?('(._?)')?
level 12
(?<=\d+\.\s)([A-Z]\w+\,?\s([A-Z]\.)+)
