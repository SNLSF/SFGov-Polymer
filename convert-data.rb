require 'csv'

	# IncidntNum	Category	Descript	DayOfWeek	Date	Time	PdDistrict	Resolution	Address	X	Y	Location	PdId

	# ["150041582", "DRUG/NARCOTIC", "POSSESSION OF CONTROLLED SUBSTANCE", "Wednesday", "01/14/2015", "14:23", "TARAVAL", "NONE", "2100 Block of 24TH AV", "-122.481305019184", "37

# If crime description contains these key words, we want it on the map!
def description_to_drug(description)
	case description
	when /marijuana/i ; :marijuana
	when /amphetamine/i ; :amphetamine
	when /heroin/i ; :heroin
	when /cocaine/i ; :cocaine
	when /opiates/i ; :opium
	when /opium/i ; :opium
		
	end
end

CSV.foreach("./SFPD_Incidents_-_from_1_January_2003.csv") do |crime|
	description = crime[2]
	latitude = crime[10]
	longitude = crime[9]
	# If we have a valid drug, let's give its marker an attribute
	drug = description_to_drug(description)
  next if drug.nil?
  puts <<-HTML
  <google-map-marker latitude="#{latitude}" longitude="#{longitude}" class="#{drug}"></google-map-marker> 
	HTML
end




