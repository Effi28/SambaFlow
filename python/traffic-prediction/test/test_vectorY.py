import unittest
from test import test_path as path
import pandas as pd
from src.vector_gen import generate_VectorY as vecY

class TestVector(unittest.TestCase):
    trajectories_df = None
    x = None

    def setUp(self):
        self.trajectories_df = pd.read_csv(path.trajectories_training_file2)
        self.x = vecY.generate_VectorY_df(self.trajectories_df)

    def test_number_columns(self):
        # routes * 20min-windws/h
        number_columns = 6 * 6
        self.assertEqual(self.x.shape[1], number_columns)

    def test_number_rows(self):
        # days * 2h-windows/day - 2h
        number_rows = 7 * 12
        self.assertEqual(self.x.shape[0], number_rows)

    def test_value_is_nan(self):
        self.assertFalse(self.x.isnull().values.any())

if __name__ == '__main__':
    unittest.main()
