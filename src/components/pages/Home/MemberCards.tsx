import { Grid } from "@chakra-ui/react";
import { MemberCard } from "./MemberCard";

const members = [
  { index: '01', enLastName: 'FUJII', enFirstName: 'TATSUYA', name: '藤井 達也', description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります' },
  { index: '02', enLastName: 'YOKOO', enFirstName: 'ANNOSUKE', name: '横尾 杏之介', description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります' },
  { index: '02', enLastName: 'YOKOO', enFirstName: 'ANNOSUKE', name: '横尾 杏之介', description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります' },
  { index: '02', enLastName: 'YOKOO', enFirstName: 'ANNOSUKE', name: '横尾 杏之介', description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります' },
];

export const MemberCards = () => {
  return (
    <Grid
      gap={{ base: '17vw', md: '7vw' }}
      templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']}
      w='100%'
    >
      {members.map(member => <MemberCard key={member.index} {...member} />)}
    </Grid>
  );
}