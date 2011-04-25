module Nesta
  class Contact < Nesta::App
    before do
      set_common_variables
    end

    get '/' do
      cache haml(:contact)
    end

    post '/' do
      # send email with pony
      # set success message
      haml(:contact)
    end
  end
end