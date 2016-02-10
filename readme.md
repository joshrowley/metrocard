# Metrocard

Solutions to a common interview question we ask.


## Outline

This problem is based on a real tool offered by the MTA, The MetroCard Calculator.

Have the candidate write a method that returns a list of monetary amounts that when added to a MetroCard, allow it to swipe down to a $0 amount given a $2.75 ride.

The card has an arbitrary starting amount already on the card, which is >= $0 and the cardholder has an arbitrary maximum to spend. i.e. The method takes these 2 things as arguments. An example of a method signature satisfying the problem specification is "calculate_perfect_swipedowns(initial_amount, max_payment)" with a return value of an array of integers.

Amounts added to the card must be divisible by 5 cents.

If the amount added to the card is >= $5.50, then the cardholder receives an 11% bonus. This does NOT include the initial amount on the card.
