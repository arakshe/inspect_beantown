import csv
from datetime import datetime
# Define the path to your CSV file
csv_file_path = 'inspectboston_new.csv'
# Function to parse the date column and find the most recent date for Milkweed entries
def parse_column(csv_file, name):
    column_values = []
    with open(csv_file, 'r', newline='') as file:
        reader = csv.reader(file)
        for row in reader:
            if row[1] == name:
                if len(row) > 10:
                    column_values.append(row[10])
    return column_values
column_values = parse_column(csv_file_path, "Milkweed")
print(column_values)
def compute_grade(deductions):
    score = 100
    for deduction in deductions:
        if deduction == '1':
            score -= 2
        elif deduction == '2':
            score -= 7
        else:
            score -= 10
    if score >= 94:
        return 'A'
    elif score <= 93 and score >= 81:
        return 'B'
    else:
        return 'C'
print(compute_grade(column_values))