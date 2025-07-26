import { Link } from '@chakra-ui/next-js'
import { Container, ContainerProps, Flex, Text, Breadcrumb, BreadcrumbItem } from '@chakra-ui/react'
import { FC, JSXElementConstructor } from 'react'

const backgroundBoxStyle = {
  h: '100%',
  left: '50%',
  top: '0',
  transform: 'translateX(-50%)',
  w: '100vw',
  zIndex: '-1',
}

interface IBlockContainerProps extends ContainerProps {
  BgBox?: JSXElementConstructor<any>
  breadcrumbs?: { href: string; name: string }[]
  childrenContainerProps?: ContainerProps
  breadcrumbsColor?: string
}

const BlockContainer: FC<IBlockContainerProps> = ({
  children,
  bgColor,
  BgBox,
  breadcrumbs,
  childrenContainerProps,
  breadcrumbsColor = 'secondary.base',
  ...props
}) => {
  const BreadcrumbContainer = () => (
    <Flex
      flexDir='column'
      w='100%'
    >
      <Breadcrumb
        color={breadcrumbsColor}
        separator='-'
        sx={{
          ol: {
            display: 'flex',
            flexWrap: 'wrap',
          },
        }}
      >
        {breadcrumbs?.map((link) => (
          <BreadcrumbItem
            fontSize={{ base: 'sm', md: 'md' }}
            key={link.name}
            minW='fit-content'
          >
            {link?.href ? (
              <Link
                _hover={{ color: 'primary.dark', textDecoration: 'underline' }}
                color={breadcrumbsColor}
                href={link.href}
              >
                {link.name}
              </Link>
            ) : (
              <Text color={breadcrumbsColor}>{link.name}</Text>
            )}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Flex
        pt='12'
        {...childrenContainerProps}
      >
        {children}
      </Flex>
    </Flex>
  )

  return (
    <Container
      flexDir='column'
      gap={{ base: 6, md: 10 }}
      my='0'
      position='relative'
      py={{ base: 8, md: 12 }}
      {...props}
    >
      {bgColor && (
        <Flex
          bgColor={bgColor}
          position='absolute'
          {...backgroundBoxStyle}
        />
      )}
      {BgBox && (
        <BgBox
          position='absolute'
          {...backgroundBoxStyle}
        />
      )}
      {breadcrumbs?.length ? <BreadcrumbContainer /> : children}
    </Container>
  )
}

export default BlockContainer
