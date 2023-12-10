type ERROR_CODE = {
  unique: number;
};

const SQLiteError: ERROR_CODE = {
  unique: 19,
} as const;

export const ERROR_CODE = SQLiteError;
