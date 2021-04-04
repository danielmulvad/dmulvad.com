import { CardProps } from 'components/Card'

export default [
  {
    title: (
      <div>
        AXON
        <br />
        Networks
      </div>
    ),
    description:
      'axon-networks.com is the homepage of AXON-Networks. axon-networks.com is a responsive React based website, served by NGINX. It features optimizations such as code-splitting and lazy-loading images.',
    imageAlt: 'AXON Networks',
    imageSrc: '/image/AXON-Networks.webp',
    cardProps: {
      sx: {
        backgroundColor: '#0470D7',
        color: '#FFFFFF'
      }
    }
  },
  {
    title: (
      <div>
        AXON
        <br />
        Orchestrator
      </div>
    ),
    description:
      'AXON Orchestrator is a scalable insights generating platform. It allows generation of alarms, mitigations and other health metrics along with advanced insights into the status of a client network. It provides the ability to analyze network health at a previous point in time.',
    imageAlt: 'AXON Orchestrator',
    imageSrc: '/image/AXON-Orchestrator.webp',
    cardProps: {
      sx: {
        backgroundColor: '#FEE213'
      }
    }
  },
  {
    title: (
      <div>
        GreenWave Employee
        <br />
        Directory
      </div>
    ),
    description:
      'GreenWave Employee Directory stores the names and contact information for employees across the enterprise. These databases can be organized by specific teams, offices, or other groupings. Employees can access the directory to quickly find the appropriate contact information for coworkers.',
    imageAlt: 'GreenWave Employee Directory',
    imageSrc: '/image/GreenWave-Directory.webp',
    cardProps: {
      sx: {
        backgroundColor: '#003157',
        color: '#FFFFFF'
      }
    }
  },
  {
    title: 'GreenWave Systems',
    description:
      'greenwavesystems.com is the homepage of Greenwave Systems. greenwavesystems.com is a responsive React based website, served by NGINX. It features optimizations such as code-splitting and lazy-loading images.',
    imageAlt: 'AXON Orchestrator',
    imageSrc: '/image/GreenWaveSystems.webp',
    cardProps: {
      sx: {
        backgroundColor: '#7FE776'
      }
    }
  },
  {
    title: 'Coredump Utility',
    description:
      'Coredump Utility is a utility at GreenWave used to manage crash logs from devices in the field. Coredump Utility is a full-stack application. The backend application is a node based REST API. The frontend application is a React based application that provides functionality to the crash logs',
    imageAlt: 'AXON Orchestrator',
    imageSrc: '/image/Coredump.webp',
    cardProps: {
      sx: {
        backgroundColor: '#DFDFDF'
      }
    }
  },
  {
    title: 'Sync-UI',
    description:
      "Sync-UI is the design system of GreenWave Systems. Sync-UI powers all of GreenWave's modern web applications. Sync-UI was created to keep all component designs in sync with each other. Sync-UI is a superset of Material-UI.",
    imageAlt: 'AXON Orchestrator',
    imageSrc: '/image/Sync-UI.webp',
    cardProps: {
      sx: {
        backgroundColor: '#00B7AD',
        color: '#FFFFFF'
      }
    }
  }
] as CardProps[]
