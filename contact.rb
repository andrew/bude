module Nesta
  class Contact < Nesta::App
    get '/' do
      set_common_variables
      cache haml(:contact)
    end

    post '/' do
      # send email with pony
      # set success message
    end
  end
end