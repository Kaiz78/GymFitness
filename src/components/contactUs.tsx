
import { Input } from '../assets/components/ui/input';
import { Textarea } from '../assets/components/ui/textarea';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Button } from '../assets/components/ui/button';


export default function ContactUs() {
  return (
    <section id="contact" className="bg-white py-16">
    <div className="container mx-auto text-center px-4">
      <h2 className="text-4xl font-bold">Contactez-nous</h2>
      <p className="mt-4 text-gray-600">Prêt à commencer votre parcours de remise en forme? Contactez-nous dès aujourd'hui!</p>   
      <form className="max-w-lg mx-auto md:mx-0 mt-4">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <Input  placeholder="Votre nom" type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <Input  placeholder="Votre email" type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <Textarea  placeholder="Votre message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4}/>
          </div>
          <div className="text-center">
            <Button type="submit" className="bg-yellow-500 text-white rounded">Send Message</Button>
          </div>
        </div>
      </form>

      <div className='flex flex-col  items-center mt-4'>
        <h4 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <a href="https://facebook.com" aria-label="Facebook" className="text-blue-800 hover:text-blue-600"><FaFacebook size={30} /></a>
          <a href="https://twitter.com" aria-label="Twitter" className="text-blue-400 hover:text-blue-300"><FaTwitter size={30} /></a>
          <a href="https://instagram.com" aria-label="Instagram" className="text-pink-600 hover:text-pink-400"><FaInstagram size={30} /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-blue-700 hover:text-blue-500"><FaLinkedin size={30} /></a>
        </div>
      </div>
    </div>
  </section>
  )
}
