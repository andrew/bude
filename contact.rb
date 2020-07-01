module Nesta
  class Contact < Nesta::App
    before do
      set_common_variables
    end

    get '/' do
      haml(:contact)
    end

    post '/' do
      Pony.mail(
        :from => params[:name] + "<" + params[:email] + ">",
        :to => 'andrewnez@gmail.com, banesbitt@dsl.pipex.com',
        :subject => "Bude Chalet contact enquiry",
        :body => params[:message] + "\n\nTelephone: " + params[:telephone] + "\n\nEmail: " + params[:email],
        :port => '587',
        :via => :smtp,
        :via_options => {
          :address              => 'smtp.sendgrid.net',
          :port                 => '587',
          :enable_starttls_auto => true,
          :user_name            => ENV['SENDGRID_USERNAME'],
          :password             => ENV['SENDGRID_PASSWORD'],
          :authentication       => :plain,
          :domain               => ENV['SENDGRID_DOMAIN']
        }
        )
      redirect '/thankyou'
    end
  end
end
