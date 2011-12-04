require 'sinatra'
require 'pony'

set :public, File.dirname(__FILE__) + '/media/images'

get '/' do
  @page_class = 'home'
  
  erb :home
end

not_found do
  @page_class = 'not_found'
  erb :not_found, :layout => :simple_layout
end

get '/home' do
  @page_class = 'home'
  
  erb :home
end

get '/philosophy' do
  @page_class = 'philosophy'
  
  erb :philosophy
end

get '/teachers' do
  @page_class = 'teachers'
  erb :teachers
end

get '/curriculum' do
  @page_class = 'curriculum'
  @script_include = '<script src="jquery-1.7.1.min.js"></script>\n<script src="script.js"></script>\n'
  
  erb :curriculum
end

get '/enrollment' do
  @page_class = 'enrollment'
  
  erb :enrollment
end

get '/directions' do
  @page_class = 'directions'
  @script_include = '<script src="http://maps.google.com/maps/api/js?sensor=false"></script>\n<script src="map.js"></script>\n'
  
  erb :directions
end

get '/contact' do
  @page_class = 'contact'
  @page_title = 'SPCDC Waitlist Application'
  
  erb :contact, :layout => :simple_layout
end

post '/contact' do
  @page_class = 'confirmation'
  @page_title = 'Thank You'
  
  Pony.options = {
    :via => :smtp,
    :via_options =>{
      :address =>'smtp.sendgrid.net',
      :port => '587',
      :domain => 'heroku.com',
      :user_name =>ENV['SENDGRID_USERNAME'],
      :password => ENV['SENDGRID_PASSWORD'],
      :authentication => :plain,
      :enable_starttls_auto => true
    }
  }
  
  Pony.mail :to => 'kinakuta.james@hotmail.com',
            :from => params[:email],
            :subject => "Waitlist application for #{params[:name]}",
            :body => erb(:email, :layout => false)
  
  
  erb :confirmation, :layout => :simple_layout
end
