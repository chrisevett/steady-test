require 'sinatra'

set :port, 4567

get '/hello' do
  'hello'
end

