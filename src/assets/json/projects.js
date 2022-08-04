import art from '../projects/art.webp';
import note from '../projects/note.webp';
import chat from '../projects/chat.webp';

export const projects = [
  {
    title: 'Arthome',
    techStack: 'React JS',
    desc: 'A Webapp with a purpose to give artists a platform on which they can easily share their artistic image.',
    img: art,
    github: 'https://github.com/daryanritul/art-home',
    live: 'https://arthome.tomarsuraj.in/',
  },
  {
    title: 'JustNote',
    techStack: 'React JS',
    desc: 'A webapp with a WYSIWYG editor to take down notes.',
    img: note,
    github: 'https://github.com/tomarsuraj/justNote',
    live: 'https://justnote.tomarsuraj.in/',
  },
  {
    title: 'Chat App',
    techStack: 'React Native',
    desc: 'A chat app that is built on React native that is powered by Firebase.',
    img: chat,
    github: 'https://github.com/tomarsuraj/justNote',
  },
];
