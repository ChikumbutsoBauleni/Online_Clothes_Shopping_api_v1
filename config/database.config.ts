import { ConfigService } from "@nestjs/config";
import { Injectable} from "@nestjs/common";

@Injectable()
export class DatabaseConfigService {
    constructor(
        private configService: ConfigService
    ){}
    getHost(): string {
        const host = this.configService.get<string>('DB_HOST');
        return host || 'https://sql10.freesqldatabase.com';
    }

    getPort(): number {
        const port = parseInt(this.configService.get<string>('DB_PORT'));
        return port || 3306;
    }

    getUserName(): string {
        const userName = this.configService.get<string>('DB_USERNAME');
        return userName || 'sql10625656';
    }

    getPassword(): string {
        const password = this.configService.get<string>('DB_PASSWORD');
        return password || 'EP4hKwGb4n';
    }

    getDatabaseName(): string {
        const databaseName = this.configService.get<string>('DB_NAME');
        return databaseName || 'sql10625656';
    }
}

