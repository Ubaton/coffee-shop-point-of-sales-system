-- Inserting coffee types into the coffee_menu table
INSERT INTO coffee_menu (id, name, price) VALUES
(1, 'Espresso', 20.00),
(2, 'Americano', 22.00),
(3, 'Latte', 25.00),
(4, 'Cappuccino', 24.00),
(5, 'Macchiato', 26.00),
(6, 'Mocha', 28.00),
(7, 'Flat White', 27.00),
(8, 'Irish Coffee', 30.00),
(9, 'Cold Brew', 22.00),
(10, 'Affogato', 23.00),
(11, 'Ristretto', 21.00),
(12, 'Turkish Coffee', 25.00),
(13, 'Vienna Coffee', 26.00),
(14, 'Iced Latte', 24.00),
(15, 'Frappe', 27.00),
(16, 'Caramel Macchiato', 29.00),
(17, 'Espresso Con Panna', 21.00),
(18, 'Doppio', 22.00),
(19, 'Cortado', 24.00),
(20, 'Cafe Au Lait', 23.00);

-- Inserting coffee orders into the coffee_orders table
INSERT INTO coffee_orders (coffee_id, size, strength, sugar_level, price, milk) VALUES
(1, 'medium', 'strong', '2', 20.00, 'milk'),
(2, 'large', 'normal', '1', 22.00, 'no milk'),
(3, 'small', 'light', '3', 25.00, 'milk'),
(4, 'extra-large', 'strong', 'extra', 24.00, 'milk'),
(5, 'medium', 'normal', '2', 26.00, 'no milk'),
(6, 'large', 'light', '1', 28.00, 'milk'),
(7, 'small', 'strong', '3', 27.00, 'no milk'),
(8, 'extra-large', 'normal', 'extra', 30.00, 'milk'),
(9, 'medium', 'light', '2', 22.00, 'no milk'),
(10, 'large', 'strong', '1', 23.00, 'milk');
