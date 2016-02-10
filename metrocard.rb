def metrocard(initial_value, maximum_spend)
  (0..maximum_spend).step(5).select do |value|
    value = value * 1.11 if value > 550
    (initial_value + value).round % 275 == 0
  end
end

puts metrocard(100, 8000)
