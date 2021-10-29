def isAlienSorted(self, words, order):

    index = {value: index for index, value in enumerate(order)}
    return words == sorted(words, key=lambda w: [index[x] for x in w])
