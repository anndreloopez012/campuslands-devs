-- DML: Inserción de datos de prueba
USE db_battle_royale_irma;

INSERT INTO jugadores (nombre_usuario, rango_actual, puntaje, partidas_jugadas, victorias, estado) VALUES
('ShadowSniper', 'Gran Maestro', 2850.50, 120, 25, 'activo'),
('Valkyria99', 'Diamante', 2100.75, 95, 14, 'activo'),
('PixelKing', 'Platino', 1540.00, 80, 8, 'activo'),
('CyberGhost', 'Diamante', 2250.25, 110, 18, 'activo'),
('StormBringer', 'Oro', 1200.50, 60, 5, 'activo'),
('NeonViper', 'Gran Maestro', 3100.00, 140, 32, 'activo'),
('AlphaWolf', 'Platino', 1650.80, 75, 9, 'suspendido'),
('GlitchMaster', 'Bronce', 850.30, 30, 1, 'activo'),
('ApexQueen', 'Diamante', 2300.10, 105, 19, 'activo');