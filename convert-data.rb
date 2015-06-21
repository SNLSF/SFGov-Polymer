require 'csv'

# Psuedocode

# Parse the csv data

	# IncidntNum	Category	Descript	DayOfWeek	Date	Time	PdDistrict	Resolution	Address	X	Y	Location	PdId

	# ["150041582", "DRUG/NARCOTIC", "POSSESSION OF CONTROLLED SUBSTANCE", "Wednesday", "01/14/2015", "14:23", "TARAVAL", "NONE", "2100 Block of 24TH AV", "-122.481305019184", "37

# First row is headers and for each row (crime) thereafter, create a google map marker 

# Define the crime description, latitude, and longitude