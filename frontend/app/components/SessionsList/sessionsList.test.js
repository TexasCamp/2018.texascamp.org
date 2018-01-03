import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import SessionsList from 'SessionsList';
import { multiFilter } from 'utils';

configure({ adapter: new Adapter() });
const sessions = [
  {
    body:
      "<p>Drupal is so 2017! Let's do something different?</p>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in ultrices justo. In non nunc eros. Mauris a luctus sapien, sit amet gravida quam. Vivamus bibendum ac leo vitae viverra. In tristique efficitur consectetur. Mauris malesuada enim sed scelerisque egestas. Integer faucibus ultrices mauris, sit amet scelerisque massa dapibus eu. Aliquam vestibulum, nisi rhoncus condimentum porta, orci turpis aliquet lorem, vitae aliquet leo nibh vel nunc. Nam interdum augue ac orci rhoncus fermentum. Nam in nisi in felis finibus efficitur sit amet non purus. Maecenas blandit volutpat feugiat. Sed mauris mi, venenatis nec commodo sit amet, pharetra at elit. Mauris eu metus convallis, tempor magna ut, consequat nibh. Fusce varius sapien diam, in interdum mi auctor dictum. In nunc sapien, elementum a metus ut, consectetur feugiat sem. Mauris commodo egestas consectetur.</p>\n\n<p>Nulla eleifend sagittis felis, id accumsan ligula mollis in. Ut posuere risus sit amet lorem luctus interdum. Vivamus pretium sem neque, sit amet congue lacus semper id. Donec efficitur sollicitudin elit imperdiet egestas. Quisque suscipit quam tincidunt, viverra eros a, fringilla nibh. Integer volutpat ut turpis in suscipit. Morbi volutpat placerat est sit amet tincidunt. Cras vitae imperdiet velit. Aenean dapibus, ante et congue malesuada, tortor arcu elementum urna, sed consectetur tortor dolor a nunc. Vivamus malesuada nibh quis velit fringilla luctus quis vel nisi. Curabitur ipsum arcu, porta id nibh eu, blandit condimentum nisi. Mauris sit amet efficitur nibh. Pellentesque placerat justo quis sem efficitur pretium.</p>",
    contactCompany: null,
    contactEmail: 'brandon@amazeelabs.com',
    contactName: 'Brandon',
    room: null,
    status: null,
    isPublished: true,
    skillLevel: 'Beginner',
    speakers: ['Brandon Williams', 'Chris Martin'],
    speakersBio:
      '<p>Brandon does web stuff.</p>\n\n<p>Chris also does web stuff.</p>',
    timeslot: '2018-05-31T14:30:00.000Z',
    track: 'Coding and Development',
    title: 'How to build a DrupalCamp website without Drupal',
    urlString: 'how-to-build-a-drupalcamp-website-without-drupal',
    visibility: true,
  },
  {
    body:
      "<p>The idea of a decoupled Frontend and Backend has been around for a couple of years. Some teams tried them out, but nobody was really fully satisfied with it. Too many problems arose during development; bad or non existing accessibility, no support for crawlers and bots, changing APIs and expensive refactorings. Even the easy task of displaying a menu on the frontend was problematic.<br /><br />\nAll these concerns caused us at Amazee Labs from actually trying it. We avoided use of decoupled systems that is until a couple of months ago. In summer 2016 for the first time ever we were able to connect React with Drupal via GraphQL and felt comfortable using it in a project. To increase the stakes we added it to a multiple hundred-thousand dollar project, because we wouldn't be Amazee if we didn't! <br /><br />\nWhat came out is a completely decoupled system built on React that powers 12 individual websites with a single Drupal Backend connected through GraphQL. All of it is completely tested as part of an continous deployment workflow, is hosted on Docker, has server side rendering, and not a single line of content or menu on the frontend.<br /><br />\nTake heed in our success though, this is not for everyone. We ran into huge issues that needed to be solved during the process and they continue to come up still today. Despite this, Amazee believes React and GraphQL to be a viable future for Drupal. Let us show you why and how this future will work!</p>",
    contactCompany: null,
    contactEmail: 'mschmid@blah.com',
    contactName: 'Michael Schmid',
    room: '123',
    status: null,
    isPublished: true,
    skillLevel: 'Intermediate',
    speakers: ['Michael Schmid'],
    speakersBio: '<p>CEO of amazee labs.</p>',
    timeslot: null,
    track: 'Coding and Development',
    title:
      'A look into a possible Future for all of us: React, GraphQL and Drupal',
    urlString:
      'a-look-into-a-possible-future-for-all-of-us-react-graphql-and-drupal',
    visibility: true,
  },
  {
    body:
      "<p>Maybe you get nervous when you think about speaking to a group of people. The thought of standing at the front of the room, being silently judged by your peers and people that know more than you might just be enough to convince you not to take the plunge. But you have a lot of great experience to share and a subject you are passionate about!<br /><br />\nIt might not sound easy, especially at first, but public speaking can be incredibly fulfilling. Learn how to prepare for a presentation of any type and walk away looking like a champ.<br /><br />\nIn this session I will:<br />\n- Introduce 5 proven techniques to calm your nerves when speaking to groups.<br />\n- Discuss ways to boost your confidence and communicate your points clearly.<br />\n- Highlight the Dos and Don'ts of using slides in your presentations.<br />\n- Convince you that speaking at your next meetup or camp is the best thing you can do.<br /><br />\nWant some resources to keep learning? Check out Nancy Duarte's best-selling books: <br />\n- https://smile.amazon.com/slide-ology-Science-Creating-Presentations/dp/0596522347<br />\n- https://smile.amazon.com/Resonate-Present-Stories-Transform-Audiences/dp/0470632011/<br />\n- https://smile.amazon.com/Illuminate-Through-Speeches-Stories-Ceremonies/dp/1101980168</p>",
    contactCompany: null,
    contactEmail: 'davidneedham@aol.com',
    contactName: 'David Needham',
    room: null,
    status: null,
    isPublished: true,
    skillLevel: 'Beginner',
    speakers: ['David Needham'],
    speakersBio: '<p>David Needham is a great guy.</p>',
    timeslot: null,
    track: 'Horizons',
    title: 'Delivering Great Presentations',
    urlString: 'delivering-great-presentations',
    visibility: true,
  },
  {
    body:
      '<p dir="ltr">Amazee Labs prides itself on delivering projects our clients love. Our scrum teams turn out projects like a well-oiled machine, working in tandem with a client-side PO in an agile way to gather specifications, build, test, and deploy. Rinse, repeat.</p>\n\n<p>But what happens when you start working on a project which turns your way of working upside down? How do you keep your sanity and support your team while keeping your client happy?</p>\n\n<p dir="ltr">This year, team Austin landed a great client who we adore, but who came with a lot of baggage. Everything is different, from deployments and workflows to conflicting Scrum methodology and many people wearing a Project Manager hat. Don\'t even get me started on disparate terminology. <em>The heck is a timebox? </em></p>\n\n<p dir="ltr">With a multi-department sign-off process and a complex org structure, no decision is quickly or easily won. </p>\n\n<p dir="ltr">To make matters worse, we thought it would be a great time to throw a completely new technology at the team. Here, learn React! </p>\n\n<p dir="ltr">The good news is, we\'re delivering great work, and our joint team is now stronger than ever. </p>\n\n<p dir="ltr">I can’t tell you how to fix your client woes, but I can tell you what\'s worked for us.</p>\n\n<p dir="ltr">It involves a lot of meetings. But you knew that. </p>',
    contactCompany: 'Amazee Labs',
    contactEmail: 'stephanie@amazeelabs.com',
    contactName: 'Stephanie El-Hajj',
    room: null,
    status: null,
    isPublished: true,
    skillLevel: 'Beginner',
    speakers: ['Stephanie El-Hajj', 'Brandon Williams', 'Andrew McClintock'],
    speakersBio:
      '<p>Stephanie hails from the world of nonprofit technology; starting at the state level, and not finding that complicated enough, upgraded to playing at the global level. Now after her seventh successful DrupalCon, Stephanie is retiring her Portland bike gear, pulling on a pair of cowboy boots, and joining the ranks of the fine folks down in Austin.</p>\n\n<p><strong>Fun Fact</strong></p>\n\n<ul><li>Stephanie is forever in search of the perfect bagel. </li>\n\t<li>Update: While #BagelQuest is currently on hiatus, #QuestoQuest is still very much active.</li>\n</ul>',
    timeslot: null,
    track: 'Project Management',
    title: 'Too many cooks! Supporting augmented teams without getting salty',
    urlString:
      'too-many-cooks-supporting-augmented-teams-without-getting-salty',
    visibility: true,
  },
];
it('SessionList should render', () => {
  const wrapper = shallow(<SessionsList />);
  expect(wrapper).toExist;
});
it('filters should work', () => {
  const filtered = multiFilter(sessions, {
    skillLevel: ['Intermediate'],
    track: ['Coding and Development'],
  });
  expect(filtered.length).toBe(1);
  expect(filtered[0]).toHaveProperty('contactName', 'Michael Schmid');
});
it('passing an empty filter means that filter is ignored', () => {
  const filtered = multiFilter(sessions, {
    skillLevel: 12345,
    track: ['Coding and Development'],
  });
  expect(filtered.length).toBe(2);
  expect(filtered[0]).toHaveProperty('contactName', 'Brandon');
  expect(filtered[1]).toHaveProperty('contactName', 'Michael Schmid');
});
