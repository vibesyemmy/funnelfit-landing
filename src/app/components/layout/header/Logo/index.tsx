import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    return (
        <Link href="/">
            <Image
                src="/images/funnelfit_logo.svg"
                alt="FunnelFit Logo"
                width={160}
                height={40}
                style={{ width: 'auto', height: '40px' }}
                quality={100}
                priority={true}
            />
        </Link>
    );
};

export default Logo;
