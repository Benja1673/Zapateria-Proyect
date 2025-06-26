-- Script para poblar la base de datos con datos iniciales

-- Insertar categorías
INSERT INTO categories (id, name, slug, description, isActive) VALUES
('cat_hombre', 'HOMBRE', 'hombre', 'Calzado para hombre', 1),
('cat_mujer', 'MUJER', 'mujer', 'Calzado para mujer', 1),
('cat_infantil', 'INFANTIL', 'infantil', 'Calzado infantil', 1);

-- Insertar marcas
INSERT INTO brands (id, name, slug, description, isActive) VALUES
('brand_guante', 'Guante', 'guante', 'Marca de calzado de cuero', 1),
('brand_caterpillar', 'Caterpillar', 'caterpillar', 'Calzado industrial y casual', 1),
('brand_panama_jack', 'Panama Jack', 'panama-jack', 'Calzado outdoor y casual', 1),
('brand_florsheim', 'Florsheim', 'florsheim', 'Calzado formal y elegante', 1),
('brand_london_adixt', 'London Adixt', 'london-adixt', 'Calzado urbano y moderno', 1),
('brand_veroz', 'Véroz', 'veroz', 'Calzado deportivo y casual', 1),
('brand_alaniz', 'Alaniz', 'alaniz', 'Calzado casual y cómodo', 1),
('brand_marvel', 'Marvel', 'marvel', 'Calzado infantil con personajes', 1),
('brand_nike', 'Nike', 'nike', 'Calzado deportivo premium', 1),
('brand_adidas', 'Adidas', 'adidas', 'Calzado deportivo y lifestyle', 1),
('brand_bubble_gummers', 'Bubble Gummers', 'bubble-gummers', 'Calzado infantil divertido', 1),
('brand_puma', 'Puma', 'puma', 'Calzado deportivo y urbano', 1),
('brand_converse', 'Converse', 'converse', 'Calzado casual icónico', 1),
('brand_fila', 'Fila', 'fila', 'Calzado deportivo retro', 1),
('brand_skechers', 'Skechers', 'skechers', 'Calzado cómodo y tecnológico', 1);

-- Insertar productos de hombre
INSERT INTO products (id, name, slug, description, price, originalPrice, discount, sku, stock, categoryId, brandId, isFeatured, rating, reviewCount) VALUES
('prod_botin_guante', 'Botín Dallas Cuero 35640 Hombre', 'botin-dallas-cuero-hombre', 'Botín de cuero genuino para hombre, cómodo y resistente', 55990, 69990, 20, 'GUA-35640', 25, 'cat_hombre', 'brand_guante', 1, 4.5, 8),
('prod_zapato_caterpillar', 'Zapato Deportivo Urbano Negro', 'zapato-deportivo-urbano-negro', 'Zapato deportivo urbano con tecnología Cat', 55990, 69990, 20, 'CAT-URB-001', 30, 'cat_hombre', 'brand_caterpillar', 1, 4.8, 12),
('prod_bota_panama', 'Bota Outdoor Cuero Negro', 'bota-outdoor-cuero-negro', 'Bota outdoor resistente al agua', 44990, 73990, 39, 'PJ-OUT-001', 15, 'cat_hombre', 'brand_panama_jack', 1, 4.5, 8);

-- Insertar productos infantiles
INSERT INTO products (id, name, slug, description, price, originalPrice, discount, sku, stock, categoryId, brandId, isFeatured, rating, reviewCount) VALUES
('prod_capitan_america', 'Zapatillas Capitán América Infantil', 'zapatillas-capitan-america-infantil', 'Zapatillas con diseño del Capitán América', 35990, 49990, 28, 'MAR-CAP-001', 20, 'cat_infantil', 'brand_marvel', 1, 4.8, 15),
('prod_spiderman_botin', 'Zapatillas Spider-Man Botín Infantil', 'zapatillas-spiderman-botin-infantil', 'Botín deportivo con diseño de Spider-Man', 42990, 59990, 28, 'MAR-SPI-001', 18, 'cat_infantil', 'brand_marvel', 0, 4.6, 12),
('prod_bubble_gummers', 'Zapatillas Deportivas Infantil', 'zapatillas-deportivas-bubble-gummers', 'Zapatillas cómodas para niños', 29990, 39990, 25, 'BG-DEP-001', 25, 'cat_infantil', 'brand_bubble_gummers', 0, 4.5, 8);

-- Insertar imágenes de productos
INSERT INTO product_images (id, productId, url, altText, isPrimary, [order]) VALUES
('img_botin_1', 'prod_botin_guante', '/images/zapato-botin-marron.png', 'Botín Guante marrón', 1, 1),
('img_cat_1', 'prod_zapato_caterpillar', '/images/zapato-deportivo-negro.png', 'Zapato Caterpillar negro', 1, 1),
('img_panama_1', 'prod_bota_panama', '/images/bota-negra-outdoor.png', 'Bota Panama Jack negra', 1, 1),
('img_cap_1', 'prod_capitan_america', '/images/zapatilla-capitan-america.png', 'Zapatilla Capitán América', 1, 1),
('img_spi_1', 'prod_spiderman_botin', '/images/zapatilla-spiderman-botin.png', 'Zapatilla Spider-Man', 1, 1),
('img_bg_1', 'prod_bubble_gummers', '/images/zapatilla-bubble-gummers.png', 'Zapatilla Bubble Gummers', 1, 1);

-- Insertar colores de productos
INSERT INTO product_colors (id, productId, name, hexCode) VALUES
('color_botin_negro', 'prod_botin_guante', 'Negro', '#000000'),
('color_botin_cafe', 'prod_botin_guante', 'Café', '#8B4513'),
('color_cat_negro', 'prod_zapato_caterpillar', 'Negro', '#000000'),
('color_cat_gris', 'prod_zapato_caterpillar', 'Gris', '#808080'),
('color_panama_negro', 'prod_bota_panama', 'Negro', '#000000'),
('color_cap_azul', 'prod_capitan_america', 'Azul', '#0066CC'),
('color_cap_rojo', 'prod_capitan_america', 'Rojo', '#FF0000'),
('color_cap_blanco', 'prod_capitan_america', 'Blanco', '#FFFFFF');

-- Insertar tallas de productos
INSERT INTO product_sizes (id, productId, size, stock) VALUES
-- Tallas para botín Guante
('size_botin_40', 'prod_botin_guante', '40', 5),
('size_botin_41', 'prod_botin_guante', '41', 8),
('size_botin_42', 'prod_botin_guante', '42', 7),
('size_botin_43', 'prod_botin_guante', '43', 5),
-- Tallas para zapato Caterpillar
('size_cat_40', 'prod_zapato_caterpillar', '40', 6),
('size_cat_41', 'prod_zapato_caterpillar', '41', 10),
('size_cat_42', 'prod_zapato_caterpillar', '42', 8),
('size_cat_43', 'prod_zapato_caterpillar', '43', 6),
-- Tallas para bota Panama Jack
('size_panama_40', 'prod_bota_panama', '40', 3),
('size_panama_41', 'prod_bota_panama', '41', 5),
('size_panama_42', 'prod_bota_panama', '42', 4),
('size_panama_43', 'prod_bota_panama', '43', 3),
-- Tallas infantiles para Capitán América
('size_cap_28', 'prod_capitan_america', '28', 4),
('size_cap_29', 'prod_capitan_america', '29', 5),
('size_cap_30', 'prod_capitan_america', '30', 6),
('size_cap_31', 'prod_capitan_america', '31', 3),
('size_cap_32', 'prod_capitan_america', '32', 2);
