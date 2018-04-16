require 'sinatra'
# contains all the routing code 

get '/' do
	erb :homepage

end

get '/about' do 
	erb :about
	
end

get '/contact' do
	erb :contact

end


get '/staff' do 
	erb :staff

end

get '/staff/:name' do 
    if params[:name] == "urara"
        erb :urara
    elsif params[:name] == "boton"
        erb :boton
    else params[:name] == "kobato"
    	erb :kobato
end

end