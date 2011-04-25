require 'rubygems'
require 'bundler/setup'

Bundler.require(:default)

require 'nesta/app'
require 'contact'

Nesta::App.root = ::File.expand_path('.', ::File.dirname(__FILE__))

map '/' do
  run Nesta::App
end

map '/contact-us' do
  run Nesta::Contact
end