import { Box, Button, Card, Flex, Text, TextField } from '@radix-ui/themes'
import * as motion from 'framer-motion/client'

const characters = [
  {
    name: 'Naruto',
    description: 'A determined ninja with dreams of becoming...',
    traits: ['Ninja', 'Determined', 'Energetic'],
    color: 'orange',
  },
  {
    name: 'Sailor Moon',
    description: 'A magical girl who fights for love and justice...',
    traits: ['Magical Girl', 'Brave', 'Kind'],
    color: 'pink',
  },
  {
    name: 'Goku',
    description: 'A powerful Saiyan warrior always seeking...',
    traits: ['Saiyan', 'Strong', 'Cheerful'],
    color: 'blue',
  },
  {
    name: 'Spike Spiegel',
    description: 'A laid-back bounty hunter with a mysterio...',
    traits: ['Bounty Hunter', 'Cool', 'Skilled'],
    color: 'green',
  },
  {
    name: 'Mikasa Ackerm',
    description: 'A skilled soldier devoted to protecting her...',
    traits: ['Soldier', 'Loyal', 'Strong-willed'],
    color: 'red',
  },
  {
    name: 'Light Yagami',
    description: 'A brilliant student who gains a supernatural...',
    traits: ['Genius', 'Ambitious', 'Complex'],
    color: 'purple',
  },
]

export default function Home() {
  return (
    <main>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: '2rem' }}
      >
        アニメフレンズ! Anime Friends!
      </motion.h1>
      <Flex direction="row" gap="4" wrap="wrap" justify="center">
        {characters.map((character, index) => (
          <motion.div
            key={character.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card style={{ width: '250px', backgroundColor: character.color, color: 'white' }}>
              <Flex>
                <Box style={{ padding: '1rem' }}>
                  <Text size="5">☆</Text>
                </Box>
                <Box>
                  <Text as="h2" size="5" weight="bold">
                    {character.name}
                  </Text>
                  <Text as="p" size="2">
                    {character.description}
                  </Text>
                  <Flex gap="2" mt="2" wrap="wrap">
                    {character.traits.map(trait => (
                      <Button key={trait} variant="soft" size="1">
                        {trait}
                      </Button>
                    ))}
                  </Flex>
                </Box>
              </Flex>
            </Card>
          </motion.div>
        ))}
      </Flex>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{ marginTop: '2rem' }}
      >
        <Card style={{ backgroundColor: 'orange', color: 'white', maxWidth: '600px', margin: '0 auto' }}>
          <Flex align="center" mb="2">
            <Text size="2" mr="2">
              ☆
            </Text>
            <Text as="div" size="6" weight="bold">
              Chat with Naruto
            </Text>
          </Flex>
          <Card style={{ backgroundColor: '#FFA500', marginBottom: '1rem' }}>
            <Text>Hey there! I'm Naruto Uzumaki, and I'm gonna be the next Hokage! Believe it!</Text>
          </Card>
          <Flex gap="2">
            <TextField.Root placeholder="Type a message to Naruto..." style={{ flex: 1 }} />
            <Button variant="solid">Send</Button>
          </Flex>
        </Card>
      </motion.div>
    </main>
  )
}
